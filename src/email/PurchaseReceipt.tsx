import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { OrderInformation } from "./components/OrderInformation";
import { v4 as uuidv4 } from "uuid";

type PurchaseReceiptEmailProps = {
  product: {
    name: string;
    description: string;
    imagePath: string;
  };
  order: { id: string; createAt: Date; pricePaidInCents: number };
  downloadVerificationId: string;
};

PurchaseReceiptEmail.PreviewProps = {
  product: {
    name: "Product name",
    description: "Some description",
    imagePath:
      "/products/cffcf108-c8cb-4043-8891-5f5518de642f-panw_CMYK_Logo_Black.png",
  },
  order: {
    id: uuidv4(),
    createAt: new Date(),
    pricePaidInCents: 10000,
  },
  downloadVerificationId: uuidv4(),
} satisfies PurchaseReceiptEmailProps;

export default function PurchaseReceiptEmail({
  product,
  order,
  downloadVerificationId,
}: PurchaseReceiptEmailProps) {
  return (
    <Html>
      <Preview>Download {product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase Information</Heading>
            <OrderInformation
              order={order}
              product={product}
              downloadVerifictionId={downloadVerificationId}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
