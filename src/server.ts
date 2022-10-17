import "reflect-metadata";
import "express-async-errors";
import express from "express";
import path from "path";
import router from "./routes";
import "./database";



const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
//app.use(morgan('dev'))
//app.use(cors())
app.use((err, request, response, next) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    }); 
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.set('view engine','ejs');


console.log(path.join(__dirname,'..','public'));
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "views"));

 app.listen(PORT,()=>{
    console.log(`
      La aplicación ha sido levantada con éxito. ✅
      Server 👂 en el puerto ${PORT}.
      🌐 >> http://localhost:3000/ << 🌐
  `);
 });


function morgan(arg0: string): any {
  throw new Error("Function not implemented.");
}

function cors(): any {
  throw new Error("Function not implemented.");
}

