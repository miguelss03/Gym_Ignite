import { IImageProps, Image } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";

type Props = IImageProps & {
    size: number;
}

export function UsePhoto({ size, ...rest }: Props) {
    return (
        <Image
            w={size}
            h={size}
            rounded='full'
            borderWidth={2}
            borderColor="gray.400"
            {...rest}
        />
    )
}