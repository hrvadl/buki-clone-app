# REACT_API_URL=$(hostname -I | awk '{print $1}')

REACT_API_URL="0.0.0.0"

if [ $1 != "android" ] && [ $1 != "ios" ];
    then
        echo "device should be android or ios"
    else
        previous_environment=$(cat .env | grep -v REACT_APP_API_URL)
        rm -rf ./.env && touch ./.env

        printf "$previous_environment\nREACT_APP_API_URL=http://$REACT_API_URL:5128\n" > ./.env 

        npm run $1
fi