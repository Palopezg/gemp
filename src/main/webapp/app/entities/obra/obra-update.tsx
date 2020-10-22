import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './obra.reducer';
import { IObra } from 'app/shared/model/obra.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IObraUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ObraUpdate = (props: IObraUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { obraEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/obra');
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
        ...obraEntity,
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
          <h2 id="gempApp.obra.home.createOrEditLabel">Create or edit a Obra</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : obraEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="obra-id">ID</Label>
                  <AvInput id="obra-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="descripcionLabel" for="obra-descripcion">
                  Descripcion
                </Label>
                <AvField id="obra-descripcion" type="text" name="descripcion" />
              </AvGroup>
              <AvGroup check>
                <Label id="habilitadaLabel">
                  <AvInput id="obra-habilitada" type="checkbox" className="form-check-input" name="habilitada" />
                  Habilitada
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="fechaFinObraLabel" for="obra-fechaFinObra">
                  Fecha Fin Obra
                </Label>
                <AvField id="obra-fechaFinObra" type="date" className="form-control" name="fechaFinObra" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/obra" replace color="info">
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
  obraEntity: storeState.obra.entity,
  loading: storeState.obra.loading,
  updating: storeState.obra.updating,
  updateSuccess: storeState.obra.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ObraUpdate);
