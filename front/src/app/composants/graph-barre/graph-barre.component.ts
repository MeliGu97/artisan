import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { FurnitureService } from '../../services/furniture.service'; 

@Component({
  selector: 'app-graph-barre',
  templateUrl: './graph-barre.component.html',
  styleUrls: ['./graph-barre.component.scss'],
  standalone: true,
  providers: [FurnitureService],
  imports: [BaseChartDirective, CommonModule]
})
export class GraphBarreComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
  public barChartType: 'bar' = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Armoire',
        data: [],
        borderColor: '#d14334',
        backgroundColor: '#d14334',
      },
      {
        label: 'Etagère',
        data: [],
        borderColor: '#34495E',
        backgroundColor: '#34495E',
      }
    ]
  };

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.furnitureService.getMaterialUsageInArmoires().subscribe(materialUsageInArmoires => {
      // console.log('Les matieres pour les armoires:', materialUsageInArmoires);

      // Récupère les labels (IDs de matériaux)
      const materialIds = Object.keys(materialUsageInArmoires);
      this.barChartData.labels = materialIds;

      // Assigne les données pour les armoires
      this.barChartData.datasets[0].data = materialIds.map(id => materialUsageInArmoires[id] || 0);

      // Charge les données pour les étagères après avoir traité les armoires
      this.furnitureService.getMaterialUsageInEtageres().subscribe(materialUsageInEtageres => {
        // console.log('Les matieres pour les etageres:', materialUsageInEtageres);

        // Combine les labels des étagères avec ceux des armoires
        const allMaterialIds = new Set([...materialIds, ...Object.keys(materialUsageInEtageres)]);
        this.barChartData.labels = Array.from(allMaterialIds);

        // Assigne les données pour les étagères
        this.barChartData.datasets[1].data = Array.from(allMaterialIds).map(id => materialUsageInEtageres[id] || 0);

        // Met à jour le graphique
        if (this.chart) {
          this.chart.update();
        }
      });
    });
  }
}