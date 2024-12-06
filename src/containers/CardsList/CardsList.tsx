import Badge from "../../components/Badge/Badge";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import Heading4 from "../../components/Heading/Heading4";
import Paragraph from "../../components/Heading/Paragraph";
import ImageLazy from "../../components/ImageLazy/ImageLazy";
import Link from "../../components/Link/Link";

interface Item {
  id: number;
  slug: string;
  image: {
    url: string;
    formats: {
      small: {
        url: string;
      };
    };
  };
  title: string;
  content: string;
  createdAt: string;
}

interface ICardList {
  data: {
    loading: boolean;
    items: Item[];
  };
  pathName: string;
  badgeName?: string;
  overflowEnabled?: boolean;
  actionButtonName?: string;
}

const CardList = ({
  data,
  pathName,
  badgeName = "New",
  overflowEnabled = false,
  actionButtonName = "Read More",
}: ICardList) => {
  if (!data.items) return;
  if (data.loading) {
    return null;
  }

  return (
    <Box overflowX={"hidden"}>
      <Grid
        columns={"repeat(auto-fill, minmax(300px, 1fr))"}
        gap={"2"}
        flow={overflowEnabled ? "column" : "dense"}
        overflowX={"auto"}
        overflowY={"hidden"}
        py={"4"}
        pl={overflowEnabled ? "2" : "0"}
        mb={"4"}
      >
        {data.items?.map((item) => (
          <Box
            key={item.id}
            style={{
              minWidth: overflowEnabled ? "300px" : "0",
            }}
          >
            <Link
              href={item.slug ? `${pathName}/${item.slug}` : `${pathName}`}
              color="gray"
              underline="none"
              highContrast
            >
              <Grid columns="1fr" align={"center"} justify={"center"} gap={"4"}>
                <Card
                  bg="cyan"
                  variant="ghost"
                  hoverEnabled
                  style={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <>
                    <ImageLazy
                      src={item.image?.formats?.small?.url || item.image?.url}
                      alt={item.title}
                      className="blog__image"
                    />
                    <Box p={"2"}>
                      <Box>
                        {new Date().getTime() -
                          new Date(item.createdAt).getTime() <
                          1000 * 60 * 60 * 24 * 7 && (
                          <Badge color="red" variant="solid">
                            {badgeName}
                          </Badge>
                        )}
                        <Heading4>{item.title}</Heading4>
                        {item.content && <Paragraph>{item.content}</Paragraph>}
                      </Box>
                      <Box pt={"2"}>
                        <Button
                          color="teal"
                          style={{
                            width: "100%",
                          }}
                        >
                          {actionButtonName}
                        </Button>
                      </Box>
                    </Box>
                  </>
                </Card>
              </Grid>
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
