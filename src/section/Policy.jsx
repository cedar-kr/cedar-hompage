import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper } from '../styles/Layout';
import { Title } from '../styles/fontStyles';
import { policyData } from '../utils/policyData';

const PolicyTopBar = styled(Wrapper)`
  display: flex;
  align-items: center;
  height: 80px;

  ${({ theme }) => theme.pnt`
    height: 70px;
  `}
  ${({ theme }) => theme.tablet`
    height: 70px;
  `}
  ${({ theme }) => theme.tnm`
    height: 60px;
  `}
  ${({ theme }) => theme.mobile`
    height: 40px;
  `}
`;

const LogoLink = styled.a`
  display: inline-flex;
`;

const DesktopLogo = styled.span`
  display: inline-flex;

  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

const MobileLogo = styled.span`
  display: none;

  ${({ theme }) => theme.mobile`
    display: inline-flex;
  `}
`;

const PolicyHero = styled.section`
  background: #f6f6f6;
  padding: 64px 0px;

  ${({ theme }) => theme.pnt`
    padding: 56px 0px;
  `}
  ${({ theme }) => theme.tablet`
    padding: 48px 0px;
  `}
  ${({ theme }) => theme.tnm`
    padding: 40px 0px;
  `}
  ${({ theme }) => theme.mobile`
    padding: 32px 0px;
  `}
`;

const PolicyTitle = styled(Title)`
  font-weight: bold;
  font-size: 4rem;
  line-height: 1.3;
  color: #222222;
  text-align: center;

  ${({ theme }) => theme.pnt`
    font-size: 3.6rem;
    line-height: 1.3;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 3.4rem;
    line-height: 1.3;
  `}
  ${({ theme }) => theme.tnm`
    font-size: 3.2rem;
    line-height: 1.3;
  `}
  ${({ theme }) => theme.mobile`
    font-size: 3rem;
    line-height: 1.3;
  `}
`;

const PolicyIntro = styled.p`
  max-width: 900px;
  margin: 30px auto 0px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.5;
  color: #222222;
  text-align: center;
  word-break: keep-all;

  ${({ theme }) => theme.pnt`
    margin-top: 20px;
    font-size: 1.6rem;
  `}
  ${({ theme }) => theme.tablet`
    margin-top: 20px;
    font-size: 1.6rem;
  `}
  ${({ theme }) => theme.tnm`
    margin-top: 10px;
    font-size: 1.5rem;
  `}
  ${({ theme }) => theme.mobile`
    margin-top: 16px;
    font-size: 1.4rem;
  `}
`;

const PolicyBody = styled.section`
  padding: 56px 0px 96px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #222222;
  word-break: keep-all;

  ${({ theme }) => theme.pnt`
    padding: 48px 0px 88px;
  `}
  ${({ theme }) => theme.tablet`
    padding: 48px 0px 80px;
  `}
  ${({ theme }) => theme.tnm`
    padding: 40px 0px 64px;
  `}
  ${({ theme }) => theme.mobile`
    padding: 28px 0px 48px;
  `}
`;

const PolicyContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PolicySection = styled.section`
  margin-top: 56px;

  &:first-child {
    margin-top: 0px;
  }

  ${({ theme }) => theme.tnm`
    margin-top: 48px;
  `}
  ${({ theme }) => theme.mobile`
    margin-top: 36px;
  `}
`;

const PolicySectionNumber = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  color: #2fcfbe;

  ${({ theme }) => theme.mobile`
    font-size: 1.4rem;
  `}
`;

const PolicySectionTitle = styled.h2`
  margin-top: 6px;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.4;

  ${({ theme }) => theme.pnt`
    font-size: 2.3rem;
  `}
  ${({ theme }) => theme.tablet`
    font-size: 2.2rem;
  `}
  ${({ theme }) => theme.tnm`
    font-size: 2rem;
  `}
  ${({ theme }) => theme.mobile`
    font-size: 1.8rem;
  `}
`;

const PolicyParagraph = styled.p`
  margin-top: 20px;
  font-size: 1.6rem;
  line-height: 1.7;
  white-space: pre-line;

  ${({ theme }) => theme.mobile`
    margin-top: 14px;
    font-size: 1.4rem;
  `}
`;

const PolicyList = styled.ul`
  margin-top: ${({ nested }) => (nested ? '6px' : '16px')};
  padding-left: 2.2rem;
  list-style: ${({ ordered }) => (ordered ? 'decimal' : 'disc')};

  li {
    font-size: 1.6rem;
    line-height: 1.7;

    &::marker {
      color: #19b4a2;
      font-weight: 700;
    }

    ${({ theme }) => theme.mobile`
      font-size: 1.4rem;
    `}
  }

  li + li {
    margin-top: 6px;
  }
`;

const PolicyLink = styled.a`
  color: #19b4a2;
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
`;

const PolicyTableWrapper = styled.div`
  margin-top: 20px;
  overflow-x: auto;

  ${({ theme }) => theme.mobile`
    margin-top: 14px;
  `}
`;

const PolicyTable = styled.table`
  width: 100%;
  min-width: ${({ minWidth }) => minWidth}px;
  border-collapse: collapse;
  border-top: 1px solid #222222;
  border-bottom: 1px solid #e0e0e0;

  th,
  td {
    padding: 16px 20px;
    font-size: 1.5rem;
    line-height: 1.6;
    text-align: left;
    vertical-align: top;
    white-space: pre-line;
  }

  th {
    background: #f6f6f6;
    font-weight: 700;
  }

  thead th,
  tbody th {
    white-space: nowrap;
  }

  tbody th {
    width: 1%;
  }

  tbody tr + tr td,
  tbody tr + tr th {
    border-top: 1px solid #e0e0e0;
  }

  ${({ theme }) => theme.mobile`
    th,
    td {
      padding: 12px 14px;
      font-size: 1.3rem;
    }
  `}
`;

const PolicyFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #000000;

  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #ffffff;
  }
`;

const sectionNumber = (idx) => `제${idx + 1}조`;

const RichText = ({ value }) =>
  Array.isArray(value) ? (
    <>
      {value.map((segment, idx) =>
        typeof segment === 'string' ? (
          segment
        ) : (
          <PolicyLink key={idx} href={segment.href} target="_blank" rel="noopener noreferrer">
            {segment.text}
          </PolicyLink>
        )
      )}
    </>
  ) : (
    value
  );

const PolicyListItem = ({ item }) =>
  item.items ? (
    <li>
      <RichText value={item.text} />
      <PolicyList nested>
        {item.items.map((child, idx) => (
          <li key={idx}>
            <RichText value={child} />
          </li>
        ))}
      </PolicyList>
    </li>
  ) : (
    <li>
      <RichText value={item} />
    </li>
  );

const PolicyBlock = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <PolicyParagraph>
          <RichText value={block.text} />
        </PolicyParagraph>
      );
    case 'list':
      return (
        <PolicyList as={block.ordered ? 'ol' : 'ul'} ordered={block.ordered}>
          {block.items.map((item, idx) => (
            <PolicyListItem key={idx} item={item} />
          ))}
        </PolicyList>
      );
    case 'table': {
      const columns = block.headers ? block.headers.length : block.rows[0].length;
      return (
        <PolicyTableWrapper>
          <PolicyTable minWidth={columns * 150}>
            {block.headers && (
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) =>
                    block.rowHeader && cellIdx === 0 ? (
                      <th key={cellIdx} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={cellIdx}>{cell}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </PolicyTable>
        </PolicyTableWrapper>
      );
    }
    default:
      return null;
  }
};

export default function Policy() {
  const { title, intro, sections, copyright } = policyData;

  return (
    <>
      <header>
        <PolicyTopBar>
          <Link href="/" passHref>
            <LogoLink aria-label="(주)시더 홈으로">
              <DesktopLogo>
                <Image src={'/icons/logo.png'} width={112} height={30} alt={'Cedar Logo'} priority unoptimized />
              </DesktopLogo>
              <MobileLogo>
                <Image src={'/icons/mobile_logo.png'} width={67.2} height={18} alt={'Cedar Logo'} priority unoptimized />
              </MobileLogo>
            </LogoLink>
          </Link>
        </PolicyTopBar>
      </header>

      <main>
        <PolicyHero>
          <Wrapper>
            <PolicyTitle>{title}</PolicyTitle>
            <PolicyIntro>{intro}</PolicyIntro>
          </Wrapper>
        </PolicyHero>

        <PolicyBody>
          <Wrapper>
            <PolicyContent>
              {sections.map((section, idx) => (
                <PolicySection key={section.id} id={section.id}>
                  <PolicySectionNumber>{sectionNumber(idx)}</PolicySectionNumber>
                  <PolicySectionTitle>{section.title}</PolicySectionTitle>
                  {section.blocks.map((block, blockIdx) => (
                    <PolicyBlock key={blockIdx} block={block} />
                  ))}
                </PolicySection>
              ))}
            </PolicyContent>
          </Wrapper>
        </PolicyBody>
      </main>

      <PolicyFooter>
        <p>{copyright}</p>
      </PolicyFooter>
    </>
  );
}
