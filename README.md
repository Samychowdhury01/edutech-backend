# EduTech

This is a robust and secure landing page application built with Express.js and TypeScript, featuring role-based login functionalities inspired by the 10 Minute School landing page. The application leverages Mongoose for seamless MongoDB integration, ensuring efficient data modeling in an asynchronous environment. Security is a priority, with JWT (JSON Web Tokens) used for user authentication and role-based access control.

## Technology stack and package

1. Express.js
2. TypeScript
3. MongoDB
4. Mongoose
5. JWT
6. Zod for validation
7. ESLint for code linting
8. Prettier for code formatting
9. bcrypt for hashing the password
10. dotenv for environment variables

### Prerequisites

Before running this project locally, ensure you have installed following:

- Node.js
- yarn

### Installation

First, clone the repo :

```
git clone https://github.com/Samychowdhury01/edutech-backend.git

```

Second, Navigate to the project directory:

```
cd edutech-backend

```

Now Install dependencies:

```
yarn

```

## How to Run the Application

To run the application locally, you need to follow these steps:

**there are two run script :**

1. **For Production:** Run application in production mode.

```
npm run start:prod

```

2. **For Development:** Run application in development mode.

```
npm run start:dev

```

### Other Scripts:

- **Build the project:** Builds the application. (it will convert ts file to js)

```
npm run build

```

- **Check Errors using EsLint:** Lints the TypeScript files using ESLint.

```
npm run lint

```

- **Fix Errors using EsLint:** Lints and fixes the TypeScript files.

```
npm run lint:fix

```

- **Check the code formatting using Prettier:** Formats the source code using Prettier.

```
npm run prettier:format

```

- **Fix the Formatting using Prettier:** Formats and fixes the source code using Prettier.

```
npm run prettier:fix

```

# API Documentation

## API Endpoints

### Auth Endpoints

#### POST /auth/signup

- **Create a new user**: Creates a new user with the provided details.
- **Request Body**: `email`, `password`, `role`
- **Response**: `200 OK` with the created user details.

#### POST /auth/login

- **login user**: login user with the provided details.
- **Request Body**: `email`, `password`,
- **Response**: `200 OK` with token and other user details.
### Course Endpoints

#### POST /courses/create

- **Create a new course**: Creates a new course with the provided details.
- **Request Body**: `name`, `teacherName`, `category`, `price`
- **Response**: `200 OK` with the created course details.

#### GET /courses

- **Response**: `200 OK` with all listed courses.





[This is the base api](hhttps://edutech-backend-self.vercel.app/api/)