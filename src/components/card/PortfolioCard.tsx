import { Chip, Stack, Typography, TypographyProps } from '@mui/material';

import { DiagonalArrowButton } from '../button/DiagonalArrowButton';
import { FiCard, FiCardContent, FiCardMedia } from './fullImageCard';

type PortfolioCardProps = {
    title: string;
    subtitle?: string;
    tags?: string[];
    backgroundImage?: string;
    textColor?: string;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
    titleSubtitleSpacing?: number;
    titleIcon?: React.ReactNode;
    buttonOnClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const PortfolioCard = ({
    title,
    subtitle,
    tags = [],
    backgroundImage,
    textColor = 'black',
    titleProps = { fontSize: '24px', fontWeight: 600 },
    subtitleProps = { fontSize: '16px', fontWeight: 500 },
    titleSubtitleSpacing = 3,
    titleIcon,
    buttonOnClick,
}: PortfolioCardProps) => {
    return (
        <FiCard onClick={buttonOnClick}>
            <FiCardMedia image={backgroundImage} />
            <FiCardContent>
                <Stack direction="row">
                    <Stack
                        spacing={titleSubtitleSpacing}
                        sx={{ color: textColor, flexGrow: 1 }}
                    >
                        {titleIcon ? titleIcon : null}
                        <Typography {...titleProps}>{title}</Typography>
                        {subtitle ? (
                            <Typography {...subtitleProps}>{subtitle}</Typography>
                        ) : null}
                        {tags ? (
                            <Stack direction="row" spacing={2}>
                                {tags.map((t, index) => (
                                    <Chip
                                        key={index}
                                        label={t}
                                        sx={{
                                            color: '#FFFFFF',
                                            backgroundColor: '#292D32',
                                            opacity: 0.5,
                                        }}
                                    />
                                ))}
                            </Stack>
                        ) : null}
                    </Stack>
                    <DiagonalArrowButton />
                </Stack>
            </FiCardContent>
        </FiCard>
    );
};
