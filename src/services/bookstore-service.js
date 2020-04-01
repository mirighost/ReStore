export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices: Building Standardized Systems Across an Engineering Organization',
            author: 'Susan J. Fowler',
            price: 19.49,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg"
        },
        {
            id: 2,
            title: 'Release It!: Design and Deploy Production-Ready Software',
            author: 'Michael T. Nygard',
            price: 23.99,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg"
        },
        {
            id: 3,
            title: 'Whistleblower: My Journey to Silicon Valley and Fight for Justice at Uber',
            author: 'Susan Fowler',
            price: 14.99,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51JGt0PjMkL.jpg"
        },
        {
            id: 4,
            title: 'Design It!: From Programmer to Software Architect (The Pragmatic Programmers)',
            author: 'Michael Keeling',
            price: 20.49,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/41srOUdjYhL._SX415_BO1,204,203,200_.jpg"
        },
        {
            id: 5,
            title: 'The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win',
            author: 'Gene Kim',
            price: 10.49,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51zDZ1s4hCL.jpg"
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                reject(new Error('Something bad happened'));
            }, 700);
        });
    };
};  