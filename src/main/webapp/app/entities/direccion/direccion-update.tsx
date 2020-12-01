import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './direccion.reducer';
import { IDireccion } from 'app/shared/model/direccion.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDireccionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DireccionUpdate = (props: IDireccionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { direccionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/direccion');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...direccionEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gempApp.direccion.home.createOrEditLabel">Create or edit a Direccion</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : direccionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="direccion-id">ID</Label>
                  <AvInput id="direccion-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="identificationLabel" for="direccion-identification">
                  Identification
                </Label>
                <AvField id="direccion-identification" type="text" name="identification" validate={{}} />
              </AvGroup>
              <AvGroup>
                <Label id="paisLabel" for="direccion-pais">
                  Pais
                </Label>
                <AvField id="direccion-pais" type="text" name="pais" />
              </AvGroup>
              <AvGroup>
                <Label id="provinciaLabel" for="direccion-provincia">
                  Provincia
                </Label>
                <AvField id="direccion-provincia" type="text" name="provincia" />
              </AvGroup>
              <AvGroup>
                <Label id="partidoLabel" for="direccion-partido">
                  Partido
                </Label>
                <AvField id="direccion-partido" type="text" name="partido" />
              </AvGroup>
              <AvGroup>
                <Label id="localidadLabel" for="direccion-localidad">
                  Localidad
                </Label>
                <AvField id="direccion-localidad" type="text" name="localidad" />
              </AvGroup>
              <AvGroup>
                <Label id="calleLabel" for="direccion-calle">
                  Calle
                </Label>
                <AvField id="direccion-calle" type="text" name="calle" />
              </AvGroup>
              <AvGroup>
                <Label id="alturaLabel" for="direccion-altura">
                  Altura
                </Label>
                <AvField id="direccion-altura" type="string" className="form-control" name="altura" />
              </AvGroup>
              <AvGroup>
                <Label id="regionLabel" for="direccion-region">
                  Region
                </Label>
                <AvField id="direccion-region" type="text" name="region" />
              </AvGroup>
              <AvGroup>
                <Label id="subregionLabel" for="direccion-subregion">
                  Subregion
                </Label>
                <AvField id="direccion-subregion" type="text" name="subregion" />
              </AvGroup>
              <AvGroup>
                <Label id="hubLabel" for="direccion-hub">
                  Hub
                </Label>
                <AvField id="direccion-hub" type="text" name="hub" />
              </AvGroup>
              <AvGroup>
                <Label id="barriosEspecialesLabel" for="direccion-barriosEspeciales">
                  Barrios Especiales
                </Label>
                <AvField id="direccion-barriosEspeciales" type="text" name="barriosEspeciales" />
              </AvGroup>
              <AvGroup>
                <Label id="codigoPostalLabel" for="direccion-codigoPostal">
                  Codigo Postal
                </Label>
                <AvField id="direccion-codigoPostal" type="text" name="codigoPostal" />
              </AvGroup>
              <AvGroup>
                <Label id="tipoCalleLabel" for="direccion-tipoCalle">
                  Tipo Calle
                </Label>
                <AvField id="direccion-tipoCalle" type="text" name="tipoCalle" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/direccion" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  direccionEntity: storeState.direccion.entity,
  loading: storeState.direccion.loading,
  updating: storeState.direccion.updating,
  updateSuccess: storeState.direccion.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DireccionUpdate);
