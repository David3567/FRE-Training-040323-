import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  @ViewChild('canvas') private canvasRef!: ElementRef;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private geometry!: THREE.SphereGeometry;
  private material!: THREE.Material;
  private mesh: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);



  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }



  private animateCube() {
    // this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.00005;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('assets/bg.jpg');
    this.geometry = new THREE.SphereGeometry(500, 60, 40);
    this.geometry.scale(-1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ map: texture });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
    this.camera.position.set(0, 0, 0.1);

  }


  private startRenderingLoop() {
    //* Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);

    let component: BackgroundComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  onInit(){
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event']) onResize(_: any) {
    this.onWindowResize();
  }
}
