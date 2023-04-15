FROM mcr.microsoft.com/devcontainers/dotnet:0-7.0 as asp-net
RUN sudo apt-get update && sudo apt update && sudo apt upgrade -y && sudo apt install nuget -y
WORKDIR /server/backend/
COPY ./buki-api.csproj .
RUN dotnet clean && dotnet restore
RUN dotnet tool install -g dotnet-ef
ENV PATH="${PATH}:/root/.dotnet/tools"
USER root
