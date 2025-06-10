import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent {
libroForm: FormGroup;
  libroGuardado: any = null;

  constructor(private fb: FormBuilder){
    this.libroForm = this.fb.group({
      autor: ['', Validators.required],
      titulo: ['', Validators.required],
      isbn: ['', Validators.required],
      editorial: ['', Validators.required],
      anioEdicion: [null, [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      numPaginas: [null, [Validators.required, Validators.min(3)]],
    });
  }

  onSubmit(){
    if(this.libroForm.valid){
      this.libroGuardado = this.libroForm.value
      console.log(this.libroGuardado)
    }
  }
}
