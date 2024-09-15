"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { Link as Scroll } from "react-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import config from "@/config";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState(false); // クリック状態のstateを管理
  const controls1 = useAnimation(); // アニメーションコントローラーを取得
  const controls2 = useAnimation(); // アニメーションコントローラーを取得

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  const startAnimation = async () => {
    setIsOpen(!isOpen);
    setClicked(!clicked); // クリックされたらクリック状態をトグル
    // 同時に複数のアニメーションを開始
    await Promise.all([
      controls1.start({
        rotate: clicked ? 0 : 220, // クリックされている場合は0度に戻し、そうでない場合は45度回転
        y: clicked ? 0 : 6, // クリックされている場合は0に戻し、そうでない場合は6に移動
        opacity: clicked ? 1 : 1,
        transition: { duration: 0.4 },
      }),
      controls2.start({
        rotate: clicked ? 0 : -220, // クリックされている場合は0度に戻し、そうでない場合は-45度回転
        y: clicked ? 0 : -6, // クリックされている場合は0に戻し、そうでない場合は-6に移動
        opacity: clicked ? 1 : 1, // クリックされている場合は1に戻し、そうでない場合は0にする
        transition: { duration: 0.4 },
      }),
    ]);
  };

  // メニューのアニメーション用のバリアントを定義
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 100 },
  };

  console.log(isOpen);
  console.log(pathname);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 py-4"
      style={{ margin: 0 }}
    >
      <nav className="flex justify-between relative" aria-label="Global">
        <Link
          href="/"
          title={`${config.appName}`}
          className="flex items-center gap-2 shrink-0"
        >
          <Zap className="w-6 h-6 " fill="currentColor" />
          <span className="font-extrabold lg:text-4xl md:text-3xl text-2xl text-foreground">
            {config.appName}
          </span>
        </Link>

        <div className="hidden md:flex md:justify-center md:gap-12 md:items-center font-semibold text-zinc-700">
          {pathname == "/" ? (
            <Scroll
              to="hero"
              smooth={true}
              offset={-100}
              className="hover:cursor-pointer hover:underline"
            >
              トップ
            </Scroll>
          ) : (
            <Link href="/" className="hover:underline">
              トップ
            </Link>
          )}

          <Link href="/coming-soon" target="" className="hover:underline">
            学ぶ
          </Link>
          <Link href="/coming-soon" target="" className="hover:underline">
            IT研修
          </Link>
          {pathname == "/" ? (
            <Scroll
              to="news"
              smooth={true}
              offset={-100}
              className="hover:cursor-pointer hover:underline"
            >
              お知らせ
            </Scroll>
          ) : (
            <Link href="/news" className="hover:underline">
              お知らせ
            </Link>
          )}
          {pathname == "/" ? (
            <Scroll
              to="company-info"
              smooth={true}
              offset={-100}
              className="hover:cursor-pointer hover:underline"
            >
              運営情報
            </Scroll>
          ) : (
            <Link href="/#company-info" className="hover:underline">
              運営情報
            </Link>
          )}

          {pathname == "/" ? (
            <Scroll
              className="primary-foreground font-bold"
              to="contact"
              smooth={true}
              offset={-100}
            >
              <Button
                size="lg"
                className="bg-cyan-600 text-white hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                お問い合わせ
              </Button>
            </Scroll>
          ) : (
            <Link href="/#contact" className="hover:underline">
              お問い合わせ
            </Link>
          )}
        </div>

        {/* モバイルーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

        <div className="md:hidden">
          <motion.div
            onClick={() => startAnimation()}
            className="relative z-50"
          >
            <motion.div
              className={
                isOpen
                  ? "w-8 h-0.5 bg-slate-50  my-2.5"
                  : "w-8 h-0.5  bg-[#20214d] my-2.5"
              }
              animate={controls1}
            ></motion.div>
            <motion.div
              className={
                isOpen
                  ? "w-8 h-0.5 bg-slate-50  my-2.5"
                  : "w-8 h-0.5  bg-[#20214d] my-2.5"
              }
              animate={controls2}
            ></motion.div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col gap-6 fixed top-0 right-0 w-full h-full z-40 p-[98px_58px_58px_58px] overflow-hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-full h-full  p-4 z-30 bg-cyan-600">
                  <Link href="/" title={`${config.appName}`}>
                    <span className="font-extrabold text-2xl text-foreground text-slate-50">
                      {config.appName}
                    </span>
                  </Link>

                  <div className="py-16  px-4">
                    <nav className="space-y-8 ">
                      <Link
                        href="/"
                        className="link link-hover block text-base font-semibold text-slate-50 border-b-1 pb-2"
                        onClick={() => startAnimation()}
                      >
                        <p className="">トップ</p>
                      </Link>
                      <Link
                        href="/coming-soon"
                        target=""
                        className="link link-hover block text-base font-semibold text-slate-50 border-b-1 pb-2"
                        onClick={() => startAnimation()}
                      >
                        <p className="">学ぶ</p>
                      </Link>
                      <Link
                        href="/coming-soon"
                        target=""
                        className="link link-hover block text-base font-semibold text-slate-50 border-b-1 pb-2"
                        onClick={() => startAnimation()}
                      >
                        <p className="">IT研修</p>
                      </Link>

                      {pathname == "/" ? (
                        <Scroll
                          to="news"
                          smooth={true}
                          offset={-40}
                          onClick={() => startAnimation()}
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                        >
                          お知らせ
                        </Scroll>
                      ) : (
                        <Link
                          href="/news"
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                          onClick={() => startAnimation()}
                        >
                          お知らせ
                        </Link>
                      )}

                      {pathname == "/" ? (
                        <Scroll
                          to="company-info"
                          smooth={true}
                          offset={-60}
                          onClick={() => startAnimation()}
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                        >
                          運営情報
                        </Scroll>
                      ) : (
                        <Link
                          href="/#company-info"
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                          onClick={() => startAnimation()}
                        >
                          運営情報
                        </Link>
                      )}
                      {pathname == "/" ? (
                        <Scroll
                          to="contact"
                          smooth={true}
                          offset={-40}
                          onClick={() => startAnimation()}
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                        >
                          お問い合わせ
                        </Scroll>
                      ) : (
                        <Link
                          href="/#contact"
                          className="link link-hover block text-base font-semibold text-slate-50 hover:text-primary cursor-pointer border-b-1 pb-2"
                          onClick={() => startAnimation()}
                        >
                          お問い合わせ
                        </Link>
                      )}
                    </nav>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};
export default Header;
