import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface LibroActualizar {
  autor: string;
  titulo: string;
  isbn: string;
  editorial: string;
  anioEdicion: string;
  numPaginas: string;
}

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent {
  libroForm: FormGroup;
  libroActualizado: any = null;
  libroActualizar: LibroActualizar = {
    autor: "Robert C. Martin",
    titulo: "Código limpio",
    isbn: "8441532109",
    editorial: "ANAYA MULTIMEDIA",
    anioEdicion: "2012",
    numPaginas: "464",
  };

  constructor(private fb: FormBuilder){
    this.libroForm = this.fb.group({
      autor: ['', Validators.required],
      isbn: ['', Validators.required],
      editorial: ['', Validators.required],
      anioEdicion: [null, [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
      numPaginas: [null, [Validators.required, Validators.min(3)]],
    });
  }

  actualizarLibro(){
    if(this.libroForm.valid){
      this.libroActualizado = this.libroForm.value;
      console.log(this.libroActualizado);
    }
  }
}
