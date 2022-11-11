import { Injectable } from "@nestjs/common";
import { exec } from "child_process";

@Injectable()
export class AppService {

  getHello(branch:string): string {
    console.log('qqqq')
    exec("cd C:\\Users\\artem\\WebstormProjects\\autoupdate", (error, stdout, stderr) => {
      console.log(error)
      console.log(stdout)
      exec(`git checkout ${branch}`, (error, stdout, stderr) => {
        console.log(error,)
        console.log(stdout,)
        exec("git pull", () => {
          exec("npm i", () => {
            exec("npm start:dev");
          });
        });
      });


    });

    return "Код для кастомных клиентов";
  }
}
