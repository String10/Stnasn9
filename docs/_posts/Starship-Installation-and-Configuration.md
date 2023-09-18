---
title: Starship安装与配置
author: B0
date: '2023-09-14'
summary: Starship安装与配置.
tags:
    - Linux
    - Shell
---

参考:
1. [Starship：可用于各种 Shell 的提示符](https://starship.rs/zh-CN/)
2. [starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell! (github.com)](https://github.com/starship/starship)

# 下载与安装

自定义安装路径:
``` bash
$ ./install.sh -b ~/.local/bin
```

修改终端配置:
``` shell
$ export PATH="~/.local/bin:$PATH"
$ eval "$(starship init bash)"
```

# 自定义配置

配置文件:
``` toml
# ~/.config/starship.toml

format = '$username$localip$all$directory$character'

[username]
style_user = 'blue bold'
style_root = 'red bold'
format = '[$user]($style)'
disabled = false
show_always = true

[localip]
ssh_only = true
format = '[@$localipv4](bold blue) '
disabled = false

[hostname]
ssh_only = true
format = 'in [$hostname](bold blue) '
trim_at = '.companyname.com'
disabled = false
```