if [[ "$@" == *saks* ]]
then
    export SMOKETEST_BANNER=saks;
    break;
elif [[ "$@" == *o5a* ]]
then
    export SMOKETEST_BANNER=o5a;
    break;
elif [[ "$@" == *bay* ]]
then
    export SMOKETEST_BANNER=bay;
    break;
elif [[ "$@" == *lat* ]]
then
    export SMOKETEST_BANNER=lat;
    break;
fi

echo "RUNNING TEST(S) ON THIS BANNER: " $SMOKETEST_BANNER

npm run nightwatch -- "$@"