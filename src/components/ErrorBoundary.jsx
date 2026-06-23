import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { lang = 'zh', children } = this.props;

    if (this.state.hasError) {
      const isZh = lang === 'zh';
      return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
          <div className="max-w-md w-full card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold">
              !
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-50 mb-2">
              {isZh ? '页面加载出错' : 'Something went wrong'}
            </h1>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {isZh
                ? '请刷新页面重试。如果问题持续存在，请通过邮箱联系。'
                : 'Please refresh the page. If the problem persists, feel free to contact me via email.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary inline-flex justify-center w-full"
            >
              {isZh ? '刷新页面' : 'Reload Page'}
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}
