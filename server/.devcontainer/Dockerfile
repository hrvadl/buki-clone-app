FROM mcr.microsoft.com/devcontainers/dotnet:0-7.0 as asp-net
# update packagies and copy local /server folder
RUN sudo apt-get update && sudo apt update && sudo apt upgrade -y && sudo apt install nuget -y
WORKDIR /usr/local/buki-app/server
ADD ./ .

# clean install 
RUN dotnet clean && dotnet restore
RUN dotnet tool install -g dotnet-ef

# to prevent errors with ef in container
ENV PATH="${PATH}:/root/.dotnet/tools"
USER root
