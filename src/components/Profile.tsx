import { Container, Center, Image, Title, Text, Divider } from "@mantine/core";
import '../styles/Profile.scss';

import { ProfileBio } from "./ProfileBio";
import { ProfileCompany } from "./ProfileCompany";
import { ProfileStats } from "./ProfileStats";
import { ProfileMedia } from "./ProfileMedia";

export const Profile = (props: Profile) => {
    return (
        <Container id="profile_outercontainer" mt={20} mb={8}>
            <Center id="profile_innercontainer" mt={15} mb={25}>
                <Container id="profilepicture_container">
                    <Image id="profilepicture" radius="sm" maw={100} src={props.avatar} alt="profile picture"/>
                </Container>

                <Container id="profileinfo_container">
                    <Title order={2} color="white" align="center">{props.name}</Title>

                    <Text color="blue" align="center">
                        <a href={props.profileLink} target="_blank">@{props.username}</a>    
                    </Text>
                </Container>
            </Center>

            {(props.company && props.company !== '') && 
                <>
                    <Divider mb={15} />
                    <ProfileCompany company={props.company} />
                </>
            }
            
            {(props.bio && props.bio !== '') && 
                <>
                    <Divider mb={15} />
                    <ProfileBio bio={props.bio} />
                </>
            }

            <Divider mb={15} />
            <ProfileStats
                publicRepos={props.publicRepos}
                publicReposLink={`https://github.com/${props.username}?tab=repositories`}
                publicGists={props.publicGists}
                publicGistsLink={`https://gist.github.com/${props.username}`}
                following={props.following}
                followingLink={`https://github.com/${props.username}?tab=following`}
                followers={props.followers}
                followersLink={`https://github.com/${props.username}?tab=followers`}
            />

            <Divider mb={15} />
            <ProfileMedia 
                location={props.location}
                xUsername={props.xUsername}
                blog={props.blog}
            />
        </Container>
    )
}
