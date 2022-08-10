import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {
  id!: string;


  constructor(public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: any) => {
      this.id = params.id;
    })
  }

  guardarMedico() {
    this.router.navigateByUrl('/medico/123');
  }

}
