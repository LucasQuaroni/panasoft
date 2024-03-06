import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App({userName, user, isFollowing}) {
    const format = (userName) => `@${userName}`;


    return (
        <section className='App'>
        <TwitterFollowCard format={format} isFollowing={true} userName="lucasquaroni" user="Lucas Quaroni">
            Lucas Quaroni
        </TwitterFollowCard>
        <TwitterFollowCard format={format} isFollowing={false} userName="midudev" user="Miguel Angel Duran">
            Midudev
        </TwitterFollowCard>
        </section>
    );
}