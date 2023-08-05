import { Center, Container, MantineProvider } from "@mantine/core";
import { useState } from "preact/hooks";

import { SearchForUser } from "./controllers/apirequest";
import './styles/App.scss';

import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { Profile } from "./components/Profile";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorAlert } from "./components/ErrorAlert";

export const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setLoadingState] = useState(false);

    const [profileData, setProfileData] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState('');

    // SHORTCUT FUNCTION FOR API REQUEST
    const onSearchForUser = () => SearchForUser(searchValue, setProfileData, setLoadingState, setErrorMessage);

    // RETURN ELEMENT
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <Center id="outercontainer">
                <Container id="innercontainer">
                    {(errorMessage && errorMessage !== '') && <ErrorAlert message={errorMessage} onClose={() => setErrorMessage('')} />}

                    <Header />
                    <InputBox
                        value={searchValue}
                        onChange={setSearchValue}
                        onKeypress={onSearchForUser}
                        onButtonClick={onSearchForUser}
                    />

                    {isLoading && <LoadingSpinner />}

                    {profileData?.name &&
                        <Profile
                            name={profileData.name}
                            username={profileData.username}
                            profileLink={profileData.profileLink}
                            avatar={profileData.avatar}
                            bio={profileData.bio}
                            company={profileData.company}
                            xUsername={profileData.xUsername}
                            location={profileData.location}
                            blog={profileData.blog}
                            following={profileData.following}
                            followers={profileData.followers}
                            publicRepos={profileData.publicRepos}
                            publicGists={profileData.publicGists}
                        />
                    }
                </Container>
            </Center>
        </MantineProvider>
    )
}
