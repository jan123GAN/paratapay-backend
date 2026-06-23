import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Group Expense Splitter API",
    description: "API documentation for group expense management",
    version: "1.0.0",
  },
  host: "paratapay-backend.onrender.com",
  schemes: ["https"], 
  tags: [
    {
      name: "Users",
      description: "Operations related to users",
    },
    {
      name: "Groups",
      description: "Group management endpoints",
    },
    {
      name: "Expenses",
      description: "Expense tracking and split logic",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts"]; 

swaggerAutogen()(outputFile, endpointsFiles, doc);
