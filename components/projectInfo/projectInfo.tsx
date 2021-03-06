import { Typography } from '@mui/material';
import { IMeta } from '../../lib/types';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';

export default function ProjectInfo({
  client,
  product,
  productionCompany,
  model,
  producer,
  agency,
  retouch,
}: IMeta) {
  const classes = useStyles();
  return (
    <PaddingComponent>
      <div className={classes.infoContainer}>
        {client.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Client</Typography>
            {client.map((c, index) => (
              <Typography className={classes.name} key={index} variant="h3">
                {c.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {product.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Product</Typography>
            {product.map((pr, index) => (
              <Typography className={classes.name} key={index} variant="h3">
                {pr.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {productionCompany.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Production company</Typography>
            {productionCompany.map((pc, index) => (
              <Typography className={classes.name} key={index} variant="h3">
                {pc.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {producer.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Producer</Typography>
            {producer.map((p, index) => (
              <Typography className={classes.name} variant="h3" key={index}>
                {p.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {agency.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Agency</Typography>
            {agency.map((a, index) => (
              <Typography className={classes.name} variant="h3" key={index}>
                {a.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {model.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Model</Typography>
            {model.map((m, index) => (
              <Typography className={classes.name} variant="h3" key={index}>
                {m.name}
              </Typography>
            ))}
          </div>
        ) : null}
        {retouch.length ? (
          <div className={classes.info}>
            <Typography variant="overline">Retouch</Typography>
            {retouch.map((r, index) => (
              <Typography className={classes.name} variant="h3" key={index}>
                {r.name}
              </Typography>
            ))}
          </div>
        ) : null}
      </div>
    </PaddingComponent>
  );
}
