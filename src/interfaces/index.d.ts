interface InputBox {
    value: string;
    onChange: Function;
    onKeypress: Function;
    onButtonClick: Function;
}

interface Profile {
    name: string;
    username: string;
    avatar: string;
    profileLink: string;
    bio: string;
    company: string;
    location: string;
    xUsername: string;
    blog: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
}

interface ProfileBio {
    bio: string;
}

interface ProfileCompany {
    company: string;
}

interface ProfileMedia {
    location: string;
    xUsername: string;
    blog: string;
}

interface ProfileStats {
    publicRepos: number;
    publicReposLink: string;
    publicGists: number;
    publicGistsLink: string;
    followers: number;
    followersLink: string;
    following: number;
    followingLink: string;
}

interface ErrorAlert {
    message: string;
    onClose: Function;
}
