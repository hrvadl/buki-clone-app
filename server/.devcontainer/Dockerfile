FROM mcr.microsoft.com/devcontainers/dotnet:0-7.0 as asp-net
# update packagies and copy local /server folder
RUN sudo apt-get update && sudo apt update && sudo apt upgrade -y && sudo apt install nuget -y && apt install  openssh-server sudo -y
RUN echo 'root:secret' | chpasswd
WORKDIR /usr/local/buki-app/server
ADD ./ .

# clean install 
WORKDIR /usr/local/buki-app/server/backend
RUN dotnet clean && dotnet restore
RUN dotnet tool install -g dotnet-ef

# to prevent errors with ef in container
ENV PATH="${PATH}:/root/.dotnet/tools"
USER root
# Create a user “sshuser” and group “sshgroup”
RUN groupadd sshgroup && usermod -aG sshgroup root
# Create sshuser directory in home
RUN mkdir -p /root/.ssh
# Copy the ssh public key in the authorized_keys file. The idkey.pub below is a public key file you get from ssh-keygen. They are under ~/.ssh directory by default.
# Expose docker port 22
EXPOSE 22
CMD ["/usr/sbin/sshd","-D"]
