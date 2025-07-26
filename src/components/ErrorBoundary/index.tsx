import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { RefreshOutlined } from '@mui/icons-material';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    bgcolor="#040404"
                    color="#F1F1F1"
                    p={3}
                    textAlign="center"
                >
                    <Typography variant="h4" gutterBottom>
                        Oops! Something went wrong
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        We're sorry, but something unexpected happened. Please try refreshing the page.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={this.handleReload}
                        startIcon={<RefreshOutlined />}
                        sx={{
                            backgroundColor: '#F1F1F1',
                            color: '#040404',
                            '&:hover': {
                                backgroundColor: '#E0E0E0',
                            },
                        }}
                    >
                        Refresh Page
                    </Button>
                    {import.meta.env.DEV && this.state.error && (
                        <Box mt={3} p={2} bgcolor="#1a1a1a" borderRadius={1} textAlign="left">
                            <Typography variant="caption" component="pre" sx={{ fontSize: '12px' }}>
                                {this.state.error.toString()}
                            </Typography>
                        </Box>
                    )}
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 