import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton> 
        <h1>felipe</h1>
        <h2>@feIiperama</h2>

        <p>
          tanto lugar p/ vcs me levar e vcs vão me levar a sério?
        </p>

        <ul>
          <li>
            <LocationIcon />
            Itaú de Minas, MG, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de maio de 1994
          </li>
        </ul>

        <Followage>
          <span>
            <strong>267</strong> Seguindo
          </span>

          <span>
            <strong>1992</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;