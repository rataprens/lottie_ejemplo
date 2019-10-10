import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numeros:any = [1,2,3,4,5,6,7];
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  mostrar:boolean = false;
  play_animacion:boolean = false;

  constructor(public navCtrl: NavController) {
    this.lottieConfig = {
      path: 'https://assets4.lottiefiles.com/packages/lf20_lVYMUQ.json',
      renderer: 'canvas',
      autoplay: false,
      loop: false
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.mostrar = true;
    setTimeout(() => {
      if(this.play_animacion){
        this.stop();
        this.play_animacion = false;
      }else{  
        this.anim.playSegments([0, 100], true);
        this.play_animacion = true;
      }
    }, 350);
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

}
