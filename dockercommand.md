docker run --rm -it --hostname my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=p@ssw0rd" \
   -p 1433:1433 --name sql1 \
   -d mcr.microsoft.com/mssql/server:2019-CU5-ubuntu-18.04
   
 docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=p@ssw0rd' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest
