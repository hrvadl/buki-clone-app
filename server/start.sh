npm i -g @devcontainers/cli

filepath="./.devcontainer/devcontainer.json"
host=$(hostname -I | awk '{print $1}')
template='"forwardPorts": ["%s", 5127]'

previous=$(head -n -2 $filepath | grep -v forwardPorts)
rm -rf $filepath
printf "$previous\n $template\n" "$host" >> $filepath
printf "}\n" >> $filepath

devcontainer up --workspace-folder ./
