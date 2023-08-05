import axios from "axios";

/**
    * A function that is triggered when the user begins a search of a GitHub user.
    * @param searchValue `string` - The username of the user to query for.
    * @param setProfileData `Function` - The function to update the profile data state.
    * @param setLoadingState `Function` - The function to enable or disable the loading spinner from displaying during API request wait.
    * @param setErrorMessage `Function` - The function to trigger an error alert, should an error occur.
    * @returns `void` - This returns nothing.
*/
export const SearchForUser = async (searchValue: string, setProfileData: Function, setLoadingState: Function, setErrorMessage: Function) => {
    setProfileData({}); // RESET PROFILE DATA
    setErrorMessage(''); // RESET ERROR ALERT

    // SEARCH VALUE VALIDATION
    if (!searchValue || searchValue === '') {
        setErrorMessage('Please make sure the input is not empty!');
        return;
    }

    // ENABLE LOADING SPINNER
    setLoadingState(true);

    // PERFORM API REQUEST
    await axios.get(`https://api.github.com/users/${searchValue}`).then(response => {
        console.log(response);
        const returnData = response.data;

        // UPDATE PROFILE DATA STATE
        setProfileData({
            name: returnData.name,
            username: returnData.login,
            avatar: returnData.avatar_url,
            profileLink: returnData.html_url,
            bio: returnData.bio,
            company: returnData.company,
            followers: returnData.followers,
            following: returnData.following,
            publicRepos: returnData.public_repos,
            publicGists: returnData.public_gists,
            xUsername: returnData.twitter_username,
            blog: returnData.blog,
            location: returnData.location
        });
    }).catch(error => {
        if (error && typeof error === 'object' && error.code && error.message) {
            setErrorMessage(`[${error.code}]: ${error.message}`);
        }
    });

    // DISABLE LOADING SPINNER
    setLoadingState(false);
}
