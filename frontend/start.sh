LOCAL_API_HOST=$(hostname -I | awk '{print $1}')

# if [ $1 != "android" ] && [ $1 != "ios" ];
#     then
#         echo "device should be android or ios"
#         exit 1;
# fi  

previous_environment=$(cat .env | grep -v REACT_APP_API_URL)
rm -rf ./.env && touch ./.env

printf "$previous_environment\nREACT_APP_API_URL=http://$LOCAL_API_HOST:5127\n" > ./.env 

npx expo start --clear