import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import tipoEmp, {
  TipoEmpState
} from 'app/entities/tipo-emp/tipo-emp.reducer';
// prettier-ignore
import tipoObra, {
  TipoObraState
} from 'app/entities/tipo-obra/tipo-obra.reducer';
// prettier-ignore
import tipoDesp, {
  TipoDespState
} from 'app/entities/tipo-desp/tipo-desp.reducer';
// prettier-ignore
import segmento, {
  SegmentoState
} from 'app/entities/segmento/segmento.reducer';
// prettier-ignore
import despliegue, {
  DespliegueState
} from 'app/entities/despliegue/despliegue.reducer';
// prettier-ignore
import tecnologia, {
  TecnologiaState
} from 'app/entities/tecnologia/tecnologia.reducer';
// prettier-ignore
import competencia, {
  CompetenciaState
} from 'app/entities/competencia/competencia.reducer';
// prettier-ignore
import estado, {
  EstadoState
} from 'app/entities/estado/estado.reducer';
// prettier-ignore
import nSE, {
  NSEState
} from 'app/entities/nse/nse.reducer';
// prettier-ignore
import obra, {
  ObraState
} from 'app/entities/obra/obra.reducer';
// prettier-ignore
import ejecCuentas, {
  EjecCuentasState
} from 'app/entities/ejec-cuentas/ejec-cuentas.reducer';
// prettier-ignore
import direccion, {
  DireccionState
} from 'app/entities/direccion/direccion.reducer';
// prettier-ignore
import emprendimiento, {
  EmprendimientoState
} from 'app/entities/emprendimiento/emprendimiento.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly tipoEmp: TipoEmpState;
  readonly tipoObra: TipoObraState;
  readonly tipoDesp: TipoDespState;
  readonly segmento: SegmentoState;
  readonly despliegue: DespliegueState;
  readonly tecnologia: TecnologiaState;
  readonly competencia: CompetenciaState;
  readonly estado: EstadoState;
  readonly nSE: NSEState;
  readonly obra: ObraState;
  readonly ejecCuentas: EjecCuentasState;
  readonly direccion: DireccionState;
  readonly emprendimiento: EmprendimientoState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  tipoEmp,
  tipoObra,
  tipoDesp,
  segmento,
  despliegue,
  tecnologia,
  competencia,
  estado,
  nSE,
  obra,
  ejecCuentas,
  direccion,
  emprendimiento,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
});

export default rootReducer;
