# Ecommerce Admin Dashboard

This is a Next.js CMS for ecommerce stores. For the frontend example store, click here.

## Getting Started

Follow these steps to test the app on your local machine.

### Prerequisites

- Node.js
- npm or yarn

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/elisabetecosta/ecommerce-admin-dashboard.git

2. Navigate to the project directory:

    ```bash
    cd ecommerce-admin-dashboard

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install

### Setting up .env file

  ```bash
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  
  DATABASE_URL=''
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
  FRONTEND_STORE_URL=http://localhost:3001
  STRIPE_API_KEY=
  STRIPE_WEBHOOK_SECRET=

### Connecting to PlanetScale and Pushing Prisma

  ```bash
  npx prisma generate
  npx prisma db push

### Running the App

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    
2. Open the app on your browser:

- After starting the development server, you should be able to access the app through localhost, usually on port 3000.

## Built With
- Next.js
- TypeScript
- TailwindCSS
- Prisma + MySQL
- Planet Scale
- Stripe

## Contributing
Feel free to contribute to this project! You can open issues for bugs or suggestions and submit pull requests to improve the app.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/elisabetecosta/ecommerce-admin-dashboard/blob/main/LICENSE.txt) file for details.
