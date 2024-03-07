import { useState } from 'react'

export function TwitterFollowCard({format, userName, user, children}) {
    
    const [isFollowing, setIsFollowing] = useState(false)

    const imgSrc = `https://unavatar.io/${userName}/`
    const text = isFollowing ? `Siguiendo` : `Seguir`
    const buttonClassName = isFollowing ? 'tw-followCard-button tw-followCard-button--following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-img' src={imgSrc} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span>{format(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>{text}</button>
        </aside>
    </article>
  );
}