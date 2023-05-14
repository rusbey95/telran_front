import React from 'react'

function Post(props) {
    // const {title, text, image, mark} = props.data;
    const posts = [
        {
            id: 1,
            title: 'Dog',
            text: 'Der Ursprung des Wortes Beagle ist nicht eindeutig geklärt. Es ist möglich, dass das Wort vom französischen Begriff begueule abgeleitet wurde, was so viel wie geöffnete Kehle oder lautes Maul bedeutet. Auch wäre der französische Begriff beugler möglich, was brüllen bedeutet, oder ein angeblich alter deutscher Begriff begele, was schelten bzw. schimpfen bedeuten soll. Genauso wäre auch die alte englische, französische oder walisische Bezeichnung beag möglich, was so viel wie klein bedeutet.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beagle_1.jpg/800px-Beagle_1.jpg',
            mark: true,
        },
        {
            id: 2,
            title: 'Dog',
            text: 'Der Ursprung des Wortes Beagle ist nicht eindeutig geklärt. Es ist möglich, dass das Wort vom französischen Begriff begueule abgeleitet wurde, was so viel wie geöffnete Kehle oder lautes Maul bedeutet. Auch wäre der französische Begriff beugler möglich, was brüllen bedeutet, oder ein angeblich alter deutscher Begriff begele, was schelten bzw. schimpfen bedeuten soll. Genauso wäre auch die alte englische, französische oder walisische Bezeichnung beag möglich, was so viel wie klein bedeutet.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beagle_1.jpg/800px-Beagle_1.jpg',
            mark: true,
        },
        {
            id: 3,
            title: 'Dog',
            text: 'Der Ursprung des Wortes Beagle ist nicht eindeutig geklärt. Es ist möglich, dass das Wort vom französischen Begriff begueule abgeleitet wurde, was so viel wie geöffnete Kehle oder lautes Maul bedeutet. Auch wäre der französische Begriff beugler möglich, was brüllen bedeutet, oder ein angeblich alter deutscher Begriff begele, was schelten bzw. schimpfen bedeuten soll. Genauso wäre auch die alte englische, französische oder walisische Bezeichnung beag möglich, was so viel wie klein bedeutet.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Beagle_1.jpg/800px-Beagle_1.jpg',
            mark: true,
        },
    ];

    return (
        <>
            <h1>Posts</h1>
            {posts.map((post) => {
                return (
                    <div
                        key = {post.id}
                        style = {{
                            backgroundColor: post.mark ? '#ddd' : '#000', 
                            color: post.mark ? '#000' : '#fff', 
                            border: '5px solid #000',
                            padding: '20px',
                        }
                    }>
                        <h1>{post.id + ' ' + post.title}</h1>
                        <p>{post.text}</p>
                        <img src={post.image} alt="dog" />
                    </div>
                );
            })}
        </>
    );
}

export default Post;