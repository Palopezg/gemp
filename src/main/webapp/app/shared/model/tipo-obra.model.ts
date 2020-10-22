import { ISegmento } from 'app/shared/model/segmento.model';
import { IObra } from 'app/shared/model/obra.model';

export interface ITipoObra {
  id?: number;
  descripcion?: string;
  segmentos?: ISegmento[];
  obra?: IObra;
}

export const defaultValue: Readonly<ITipoObra> = {};
