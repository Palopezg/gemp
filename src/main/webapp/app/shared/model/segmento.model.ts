import { ITipoObra } from 'app/shared/model/tipo-obra.model';

export interface ISegmento {
  id?: number;
  descripcion?: string;
  tipoObra?: ITipoObra;
}

export const defaultValue: Readonly<ISegmento> = {};
