import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Crumb = ({ text, href, last = false }) => {
  if (last) {
    return <Typography style={{ fontWeight: 600 }} color="text.primary">{text}</Typography>;
  }

  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
};

const NextBreadcrumbs = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const generateBreadcrumbs = () => {
    const asPathWithoutQuery = router.asPath.split("?")[0];

    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");

      const text = t(subpath);
      return { href, text };
    });

    return [{ href: "/", text: t('home') }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="-" style={{ margin: "120px 0 60px 0" }}>
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
};

export default NextBreadcrumbs;