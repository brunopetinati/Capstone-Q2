import {
  Container,
  StyledTable,
  TableHead,
  TableRow,
  TableCell,
  Icon,
  StyledLink,
} from "./style";
import { useHistory } from "react-router-dom";
import { ImBin2 } from "react-icons/im";
import { Button } from "./style";

const Table = ({
  title,
  info,
  details,
  remove,
  data,
  detailsRoute,
  registerRoute,
  handleRemove,
  isActivity,
}) => {
  const history = useHistory();
  const size = window.screen.width;
  return (
    <>
      <Container>
        {size > 600 ? (
          <>
            <StyledTable>
              <TableRow>
                <TableHead>{title}</TableHead>
                <TableHead>{info}</TableHead>
                <TableHead>{details}</TableHead>
                <TableHead>{remove}</TableHead>
              </TableRow>
              {data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    {isActivity ? (
                      <TableCell>{item.date}</TableCell>
                    ) : (
                      <TableCell>{item.group}</TableCell>
                    )}
                    <TableCell>
                      <StyledLink to={`/${detailsRoute}/${item.id}`}>
                        + detalhes
                      </StyledLink>
                    </TableCell>
                    <TableCell>
                      <Icon
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        <ImBin2 />
                      </Icon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </StyledTable>
          </>
        ) : (
          <>
            <StyledTable>
              <TableRow>
                <TableHead>{title}</TableHead>
                <TableHead>{details}</TableHead>
                <TableHead>{remove}</TableHead>
              </TableRow>
              {data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <StyledLink to={`/${detailsRoute}/${item.id}`}>
                        + detalhes
                      </StyledLink>
                    </TableCell>
                    <TableCell>
                      <Icon
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        <ImBin2 />
                      </Icon>
                    </TableCell>
                  </TableRow>
                );
              })}
            </StyledTable>
          </>
        )}
      </Container>
      <Button onClick={() => history.push(`/${registerRoute}`)}>
        Cadastrar
      </Button>
    </>
  );
};

export default Table;
