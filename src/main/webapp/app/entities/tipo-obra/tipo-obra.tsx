import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tipo-obra.reducer';
import { ITipoObra } from 'app/shared/model/tipo-obra.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITipoObraProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TipoObra = (props: ITipoObraProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tipoObraList, match, loading } = props;
  return (
    <div>
      <h2 id="tipo-obra-heading">
        Tipo Obras
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Tipo Obra
        </Link>
      </h2>
      <div className="table-responsive">
        {tipoObraList && tipoObraList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripcion</th>
                <th>Segmento</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tipoObraList.map((tipoObra, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tipoObra.id}`} color="link" size="sm">
                      {tipoObra.id}
                    </Button>
                  </td>
                  <td>{tipoObra.descripcion}</td>
                  <td>{tipoObra.segmento ? <Link to={`segmento/${tipoObra.segmento.id}`}>{tipoObra.segmento.descripcion}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tipoObra.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tipoObra.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tipoObra.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Tipo Obras found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tipoObra }: IRootState) => ({
  tipoObraList: tipoObra.entities,
  loading: tipoObra.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TipoObra);
