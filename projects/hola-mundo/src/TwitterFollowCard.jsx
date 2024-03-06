export function TwitterFollowCard({format, userName, user, isFollowing, children}) {
    const imgSrc = `https://unavatar.io/${userName}/`
    
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
            <button>Seguir</button>
        </aside>
    </article>
  );
}