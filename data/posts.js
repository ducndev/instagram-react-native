import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Midgard_Glacier_%285670337770%29.jpg',
        user: USERS[0].user,
        likes: 10234,
        caption: 'Platea nec quae quibusdam eos sint, non vivamus! Molestie minim deleniti laboris eius mauris et. Laoreet! Esse? Molestiae, laboriosam ac deleniti delectus morbi. Vehicula, convallis fringilla ligula odio! Ante ratione.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'thequazman',
                comment: "Wow! that's freaking awsome!",
            },
            {
                user: 'amanda',
                comment: 'I also want to go there!',
            },
        ],
    },
    {
        imageUrl: 'https://media.cntraveler.com/photos/63e6b44a71cc5230e7788d4f/7:10/w_2498,h_3569,c_limit/Paris_GettyImages-601762971.jpg',
        user: USERS[1].user,
        likes: 43242,
        caption: 'Erat molestie tellus pellentesque? Erat. Ea mollis fames molestias irure commodi massa? Aspernatur sagittis, nisi ac! Integer? Viverra. Adipisicing iste etiam nisi. Nascetur mi, consectetuer incidunt turpis rhoncus, tortor cursus.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'thequazman',
                comment: "Wow! that's freaking awsome!",
            },
            {
                user: 'amanda',
                comment: 'I also want to go there!',
            },
        ],
    },
    {
        imageUrl: 'https://www.theschoolrun.com/sites/theschoolrun.com/files/england_homework_gnome.jpg',
        user: USERS[2].user,
        likes: 72870,
        caption: 'Auctor, consequatur pede fugit officia quibusdam magna, blanditiis placerat tincidunt accumsan. Lacus, elementum illo, tempora congue quia deserunt, nemo maiores. Pretium? Odio temporibus praesent erat dictumst congue, lacinia voluptatibus fames.',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'thequazman',
                comment: "Wow! that's freaking awsome!",
            },
            {
                user: 'amanda',
                comment: 'I also want to go there!',
            },
        ],
    },
    {
        imageUrl: 'https://uceap.universityofcalifornia.edu/sites/default/files/2019-08/business-and-entrepreneurship-in-london-M2.jpg',
        user: USERS[3].user,
        likes: 2445,
        caption: 'Autem fugit magnam eos. Impedit maecenas excepteur condimentum quibusdam facilis sapien sint? Hymenaeos eiusmod dis, lacus proin dolores. Odit tempor lobortis. Diam, habitant. Culpa scelerisque, accusamus magna soluta ratione dictum.',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'thequazman',
                comment: "Wow! that's freaking awsome!",
            },
            {
                user: 'amanda',
                comment: 'I also want to go there!',
            },
        ],
    },

]