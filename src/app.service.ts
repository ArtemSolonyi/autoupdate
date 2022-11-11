import { Injectable } from "@nestjs/common";
import { exec } from "child_process";

@Injectable()
export class AppService {

  getHello(): string {
    console.log('qqqq')
    exec("cd C:\\Users\\artem\\WebstormProjects\\autoupdate", (error, stdout, stderr) => {
      console.log(error)
      console.log(stdout)
      exec("git checkout master", (error, stdout, stderr) => {
        console.log(error,)
        console.log(stdout,)
        exec("git pull", () => {
          exec("npm i", () => {
            exec("npm start:dev");
          });
        });
      });


    });

    return "Поменяли ветку";
  }
}
