import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/tipo-emp">
      Tipo Emp
    </MenuItem>
    <MenuItem icon="asterisk" to="/tipo-obra">
      Tipo Obra
    </MenuItem>
    <MenuItem icon="asterisk" to="/tipo-desp">
      Tipo Desp
    </MenuItem>
    <MenuItem icon="asterisk" to="/segmento">
      Segmento
    </MenuItem>
    <MenuItem icon="asterisk" to="/despliegue">
      Despliegue
    </MenuItem>
    <MenuItem icon="asterisk" to="/tecnologia">
      Tecnologia
    </MenuItem>
    <MenuItem icon="asterisk" to="/competencia">
      Competencia
    </MenuItem>
    <MenuItem icon="asterisk" to="/estado">
      Estado
    </MenuItem>
    <MenuItem icon="asterisk" to="/nse">
      Nse
    </MenuItem>
    <MenuItem icon="asterisk" to="/obra">
      Obra
    </MenuItem>
    <MenuItem icon="asterisk" to="/ejec-cuentas">
      Ejec Cuentas
    </MenuItem>
    <MenuItem icon="asterisk" to="/direccion">
      Direccion
    </MenuItem>
    <MenuItem icon="asterisk" to="/emprendimiento">
      Emprendimiento
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
