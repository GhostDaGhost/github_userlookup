import { Container, List, ThemeIcon } from "@mantine/core";
import { IconFolders, IconCode, IconUserHeart, IconUsers } from "@tabler/icons-react";

export const ProfileStats = (props: ProfileStats) => {
    return (
        <Container mb={8}>
            <List size="md">
                <List.Item mb={10} icon={
                    <ThemeIcon color="blue" size={29} radius="xl">
                        <IconFolders size="1.2rem" />
                    </ThemeIcon>
                }>
                    Public Repositories: <a href={props.publicReposLink} target="_blank">{props.publicRepos}</a>
                </List.Item>

                <List.Item mb={10} icon={
                    <ThemeIcon color="violet" size={29} radius="xl">
                        <IconCode size="1.2rem" />
                    </ThemeIcon>
                }>
                    Public Gists: <a href={props.publicGistsLink} target="_blank">{props.publicGists}</a>
                </List.Item>

                <List.Item mb={10} icon={
                    <ThemeIcon color="pink" size={29} radius="xl">
                        <IconUserHeart size="1.2rem" />
                    </ThemeIcon>
                }>
                    Followers: <a href={props.followersLink} target="_blank">{props.followers}</a>
                </List.Item>

                <List.Item mb={10} icon={
                    <ThemeIcon color="teal" size={29} radius="xl">
                        <IconUsers size="1.2rem" />
                    </ThemeIcon>
                }>
                    Following: <a href={props.followingLink} target="_blank">{props.following}</a>
                </List.Item>
            </List>
        </Container>
    )
}
