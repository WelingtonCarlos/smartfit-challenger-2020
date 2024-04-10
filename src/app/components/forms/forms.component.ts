import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [GetUnitsService],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  results: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}

  // método que será executado toda vez que esss componente for chamado em tela.
  ngOnInit(): void {
      this.unitService.getAllUnits().subscribe(data => {
        this.results = data.locations
      })
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }
  onClean(): void {
    this.formGroup.reset();
  }
}
